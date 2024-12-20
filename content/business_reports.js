const urlList = fetch('content/report-list.json')

[
    "business-reports/AllerScan.html",
    "business-reports/MindLink Telehealth.html",
    "business-reports/HomeProVet.html",
    "business-reports/UrbanZip Logistics.html",
    "business-reports/NutriSync Health.html",
    "business-reports/WasteNot Solutions.html",
    "business-reports/CertTrackPro.html",
    "business-reports/BakeStock Solutions.html",
    "business-reports/DesignIterate.html",
    "business-reports/RoomReadyNow.html",
    "business-reports/BookQueuePro.html",
    "business-reports/DentalRemind+.html",
    "business-reports/TruckTrackr.html",
    "business-reports/FitProgressPro.html",
    "business-reports/BrewCyclePlan.html",
    "business-reports/QuoteCompareNow.html",
    "business-reports/ReThreads.html",
    "business-reports/KiddieBites.html",
    "business-reports/PawPal.html",
    "business-reports/GreenThumb AI.html",
    "business-reports/LocalLens.html",
    "business-reports/AllerScan.html",
    "business-reports/FinFluence.html",
    "business-reports/GearShare.html",
    "business-reports/SkinCycle.html",
    "business-reports/MoodReads.html"
];

const container = document.getElementById("container_business_report");

const basePageUrl = "https://lazybuilder.github.io/Jumpstart-Reports/business-reports"

function createBoxes(urlList) {
    const row = document.createElement("div");
    row.classList.add("row","row-cols-1","row-cols-sm-2","row-cols-md-3","g-3");
    
    container.appendChild(row);

    urlList.forEach(url => {
        const col = document.createElement("div");
        col.classList.add("col");

        const card = document.createElement("div");
        card.classList.add("card","shadow-sm");

        const cardbody = document.createElement("div");
        cardbody.classList.add("card-body");

        const title = document.createElement("h4");
        title.textContent = url['title']
        cardbody.appendChild(title);


        // Create a link element for the URL
        const link = document.createElement("a");
        link.href = basePageUrl+url['filename'];
        link.textContent = "Get the Full Report"; // Or customize the link text

        // Optionally add an image or other content
        // const image = document.createElement("img");
        // image.src = "..."; // Replace with image source

        cardbody.appendChild(link);
        card.appendChild(cardbody);
        col.appendChild(card);
        row.appendChild(col);
    });
}

createBoxes(urlList)


//document.addEventListener('DOMContentLoaded', function() {
//    const reportList = document.getElementById('report-list');
    
    // This function fetches the list of reports from a JSON file
//    fetch('content/report-list.json')
//        .then(response => response.json())
//        .then(data => {
//            data.reports.forEach(report => {
//                const li = document.createElement('li');
//                const a = document.createElement('a');
//                a.href = `business-reports/${report.filename}`;
//                a.textContent = report.title;
//                li.appendChild(a);
//                reportList.appendChild(li);
//            });
//        })
//        .catch(error => {
//            console.error('Error loading reports:', error);
//            reportList.innerHTML = '<li>Error loading reports. Please try again later.</li>';
//        });
//});