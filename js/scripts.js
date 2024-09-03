function openDialog(title, description, award, videoSrc = null) {
    document.getElementById('dialog-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('dialog-award').innerText = award;

    const videoElement = document.getElementById('dialog-video');
    if (videoSrc) {
        videoElement.src = videoSrc;
        videoElement.style.display = 'block';
        videoElement.setAttribute('alt', title); // Accessibility improvement
    } else {
        videoElement.style.display = 'none';
    }

    document.getElementById('overlay').classList.add('show');
    document.getElementById('dialog').classList.add('show');
}

function closeDialog() {
    document.getElementById('overlay').classList.remove('show');
    document.getElementById('dialog').classList.remove('show');
    document.getElementById('dialog-video').pause(); // Pause the video when closing the dialog
}
