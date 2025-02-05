function nextSlide() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}

document.getElementById('next').onclick = nextSlide;
document.getElementById('prev').onclick = function() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
};

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);