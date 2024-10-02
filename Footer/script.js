// Chat button toggle functionality
document.getElementById('chatButton').onclick = function() {
    const chatForm = document.getElementById('chatForm');
    if (chatForm.style.display === 'block') {
        chatForm.style.display = 'none';
    } else {
        chatForm.style.display = 'block';
    }
};

// Close chat functionality
document.getElementById('closeChat').onclick = function() {
    document.getElementById('chatForm').style.display = 'none';
};
