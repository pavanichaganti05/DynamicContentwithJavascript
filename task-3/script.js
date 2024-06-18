document.addEventListener("DOMContentLoaded", () => {
    // Slider
    const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
    let currentIndex = 0;
    const sliderImage = document.getElementById("slider-image");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        sliderImage.src = images[currentIndex];
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        sliderImage.src = images[currentIndex];
    });

    // Accordion
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    accordionHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });

    // Tabs
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabLinks.forEach(link => {
        link.addEventListener("click", () => {
            const target = link.dataset.tab;
            tabContents.forEach(content => {
                content.style.display = content.id === target ? "block" : "none";
            });
        });
    });

    // Form Validation
    const form = document.getElementById("sample-form");
    form.addEventListener("submit", (event) => {
        const name = form.elements["name"].value;
        const email = form.elements["email"].value;
        if (!name || !email) {
            event.preventDefault();
            alert("Please fill in all fields");
        }
    });

    // Fetch Data from API
    const fetchDataBtn = document.getElementById("fetch-data-btn");
    const apiDataDiv = document.getElementById("api-data");

    fetchDataBtn.addEventListener("click", () => {
        fetch("https://api.example.com/data")
            .then(response => response.json())
            .then(data => {
                apiDataDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
            })
            .catch(error => {
                apiDataDiv.innerHTML = `<p>Error fetching data</p>`;
            });
    });
});
