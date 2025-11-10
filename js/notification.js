function showNotification(message, type) {
    notification.textContent = message;
    notification.className = `notification ${type} show`;
            
    setTimeout(() => {
       notification.className = 'notification';
    }, 3000);
}