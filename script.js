document.addEventListener("DOMContentLoaded", () =>
    {
        let themeToggle = document.querySelector('.toggle');
    let darkIcon = document.querySelector('.dark-icon');
    let lightIcon = document.querySelector('.light-icon');
    let images = document.querySelectorAll('.image.light');
    let allImages = document.querySelectorAll('.image');
    let i=0;
    
    //toggle dark mode
    if (localStorage.getItem('theme')==='dark')
    {
        document.body.classList.add('dark-mode');
        darkIcon.classList.remove('show');
        lightIcon.classList.add('show');
        getImagesForMode();
    }
    else
    {
        darkIcon.classList.add('show');
        images[0].classList.add('show');
    }
    
    themeToggle.addEventListener('click', toggleMode);
    function toggleMode()
    {
        document.body.classList.toggle('dark-mode');
        if(document.body.classList.contains('dark-mode'))
        {
            localStorage.setItem('theme', 'dark');
            darkIcon.classList.remove('show');
            lightIcon.classList.add('show');
        }
        else
        {
            localStorage.setItem('theme', 'light');
            lightIcon.classList.remove('show');
            darkIcon.classList.add('show');
        }
        getImagesForMode();
    }
    
    //select only light mode imagess
    
    
    function swap()
    {
        if (images.length>0)
        {
            images[i].classList.remove('show');
            images[i].style.opacity = 0;
            setTimeout(() =>
            {
                i = (i+1)%images.length;
                images[i].style.visibility = 'visible';
                setTimeout(() =>
                {
                    images[i].classList.add('show');
                    images[i].style.opacity = 1;
                }, 10);
            }, 1000);
        }
    }
    
    function getImagesForMode()
    {
        allImages.forEach(img =>
        {
            img.classList.remove('show'); // Hide all images
            img.style.opacity = 0; // Set opacity to 0 to avoid flashing
            img.style.visibility = 'hidden';
        });
        images = document.body.classList.contains('dark-mode')
        ? document.querySelectorAll('.image.dark')
        : document.querySelectorAll('.image.light');
        i = 0;
        if (images.length>0)
        {
            images[i].classList.add('show');
            images[i].style.visibility = 'visible';
            setTimeout(() =>
            {
                images[i].style.opacity = 1; // Set opacity to 1 after a delay for fade-in effect
            }, 10);
        }
    }
    
    setInterval(swap, 3000);
    
    })
    