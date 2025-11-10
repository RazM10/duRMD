let array_category = [
    {
        "id": "0",
        "name": "Reserve"
    },
    {
        "id": "1",
        "name": "Change"
    },
	{
        "id": "2",
        "name": "Change"
    },
    {
        "id": "3",
        "name": "Awir Bazar"
    },
    {
        "id": "4",
        "name": "Sewa Bill"
    },
    {
        "id": "5",
        "name": "Rent"
    },
    {
        "id": "6",
        "name": "Bank Check Shop"
    },
    {
        "id": "7",
        "name": "Bank Check Flat02"
    },
    {
        "id": "8",
        "name": "Bank Check Villa21"
    }
]

// State
let array_dealer =  get_dealer_f_ls() || [];
let array_transaction = get_transaction_f_ls() || [];
let currentFilter = 'all';

// DOM Elements
const transactionForm = get_by_id('transaction-form');
const transactionList = get_by_id('transaction-list');
const balanceAmount = document.getElementById('balance-amount');
const incomeAmount = document.getElementById('income-amount');
const expensesAmount = document.getElementById('expenses-amount');
const filterButtons = document.querySelectorAll('.filter-btn');
const category_dd= get_by_id('category_dd');
const dealer_dd= get_by_id('dealer_dd');
const date_ms = get_by_id('date_ms');

// Initialize the app
function init() {
	updateSummary();
	renderTransactions();
	setupEventListeners();
}

date_ms.value = formatted_date;

// populate category dd
for(var i = 0; i < array_category.length; i++) 
{ 
    var opt = array_category[i]; 
    var el = document.createElement("option");
    el.textContent = opt.name; 
    el.value = opt.id;
    category_dd.appendChild(el); 
}
// populate dealer dd
for(var i = 0; i < array_dealer.length; i++) 
{ 
    var opt = array_dealer[i]; 
    var el = document.createElement("option");
    el.textContent = opt.cname; 
    el.value = opt.id;
    dealer_dd.appendChild(el); 
}

// Set up event listenerss
function setupEventListeners() {
	transactionForm.addEventListener('submit', addTransaction);
	
	filterButtons.forEach(button => {
		button.addEventListener('click', () => {
			// Update active filter button
			filterButtons.forEach(btn => btn.classList.remove('active'));
			button.classList.add('active');
			
			// Set current filter and re-render
			currentFilter = button.dataset.filter;
			renderTransactions();
		});
	});
}

// Add a new transaction
function addTransaction(e) {
	e.preventDefault();
	
	const description = document.getElementById('description').value;
	const amount = parseFloat(document.getElementById('amount').value);
	const type = document.querySelector('input[name="type"]:checked').value;
	
	if (!date_ms || !description || !amount || !category_dd) {
		alert('Please fill in all fields');
		return;
	}
	
	const transaction = {
		id: Date.now(),
		date: date_ms.value,
		description,
		amount,
		category: category_dd.value,
		dealer: dealer_dd.value,
		type,
		// date: new Date().toISOString()
	};
	
	array_transaction.push(transaction);
	save_transaction_i_ls(array_transaction);
	updateSummary();
	renderTransactions();
	
	// Reset form
	transactionForm.reset();
	document.getElementById('income-type').checked = true;
}

// Delete a transaction
function deleteTransaction(id) {
	array_transaction = array_transaction.filter(transaction => transaction.id !== id);
	save_transaction_i_ls(array_transaction);;
	//updateSummary();
	renderTransactions();
}

// Update the summary cards
function updateSummary() {
	const income = array_transaction
		.filter(t => t.type === 'income')
		.reduce((sum, t) => sum + t.amount, 0);
		
	const expenses = array_transaction
		.filter(t => t.type === 'expense')
		.reduce((sum, t) => sum + t.amount, 0);
		
	const balance = income - expenses;
	
	balanceAmount.textContent = formatCurrency(balance);
	incomeAmount.textContent = formatCurrency(income);
	expensesAmount.textContent = formatCurrency(expenses);
}

// Render transactions based on current filter
function renderTransactions() {
	// Filter transactions
	let filteredTransactions = array_transaction;
	if (currentFilter === 'income') {
		filteredTransactions = array_transaction.filter(t => t.type === 'income');
	} else if (currentFilter === 'expense') {
		filteredTransactions = array_transaction.filter(t => t.type === 'expense');
	}
	
	// Sort by date (newest first)
	filteredTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));
	
	// Render transactions
	if (filteredTransactions.length === 0) {
		transactionList.innerHTML = '<div class="empty-state">No transactions found.</div>';
		return;
	}
	
	transactionList.innerHTML = filteredTransactions.map(transaction => `
		<div class="transaction-item">
			<div class="transaction-info">
				<div class="transaction-title">${transaction.description}</div>
				<div class="transaction-category">${array_category[transaction.category].name} • ${formatDate(transaction.date)}</div>
			</div>
			<div class="transaction-amount ${transaction.type}-amount">
				${transaction.type === 'income' ? '+' : '-'}${formatCurrency(transaction.amount)}
			</div>
			<button class="delete-btn" onclick="deleteTransaction(${transaction.id})">×</button>
		</div>
	`).join('');
}

// Format currency
function formatCurrency(amount) {
	return '$' + amount.toFixed(2);
}
		
// Format date
function formatDate(dateString) {
	const options = { year: 'numeric', month: 'short', day: 'numeric' };
	return new Date(dateString).toLocaleDateString(undefined, options); 
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', init);