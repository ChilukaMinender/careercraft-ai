function downloadPDF() {

    const resumeContent = document.getElementById("resume-preview").innerHTML;

    // Create print window
    const printWindow = window.open('', '', 'width=900,height=650');

    printWindow.document.write(`

        <html>

        <head>

            <title>CareerCraft Resume</title>

            <style>

                body{
                    font-family: Arial, sans-serif;
                    padding:40px;
                    color:black;
                    background:white;
                    line-height:1.6;
                }

                h1{
                    font-size:32px;
                    margin-bottom:10px;
                }

                h3{
                    margin-top:25px;
                    border-bottom:2px solid #333;
                    padding-bottom:5px;
                }

                p, span{
                    font-size:16px;
                }

                .contact-info{
                    margin-bottom:20px;
                }

            </style>

        </head>

        <body>

            ${resumeContent}

        </body>

        </html>

    `);

    printWindow.document.close();

    // Wait before print
    setTimeout(() => {

        printWindow.print();

        printWindow.close();

    }, 500);

}