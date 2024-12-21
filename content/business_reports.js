
urlList = []

fetch('content/report-list.json')
    .then(
        response => response.json()
    )
    .then(jsondoc => {
        urlList = jsondoc.reports;
        }
    )
    .catch(
        error => {
            console.error('Error loading reports:', error);
        }
    );

const container = document.getElementById("container_business_report");

const basePageUrl = "https://lazybuilder.github.io/Jumpstart-Reports/business-reports"

function createBoxes() {
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

createBoxes()


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