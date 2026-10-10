const API_URL = '1TdN2Taj0HxvtM-02_qi_3mee2R9vvkFJaOkQ65x6IGU';

async function fetchDataLogistik() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        document.getElementById('loading').style.display = 'none';
        const table = document.getElementById('dataTable');
        table.style.display = 'table';
        
        const tbody = document.getElementById('tableBody');
        
        data.forEach(item => {
            if(item["AC REG"] && item["AC REG"] !== "") {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td><strong>${item["AC REG"]}</strong></td>
                    <td>${item["PART NUMBER REQUEST"]}</td>
                    <td>${item["FROM STATION / CODE STORE"]}</td>
                    <td>${item["DELIVERY STATION / CODE STATION"]}</td>
                    <td>
                        <span style="color: ${item["RECEIVED"] === true ? 'green' : 'red'}; font-weight: bold;">
                            ${item["RECEIVED"] === true ? 'Diterima' : 'Belum'}
                        </span>
                    </td>
                `;
                tbody.appendChild(tr);
            }
        });

    } catch (error) {
        console.error("Gagal mengambil data:", error);
        document.getElementById('loading').innerText = "Gagal memuat data. Silakan coba lagi.";
    }
}
document.addEventListener('DOMContentLoaded', fetchDataLogistik);