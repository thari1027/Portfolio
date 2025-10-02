let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('.menu-bar');

menuBtn.onclick = () => {
    navbar.classList.toggle('active');
};

function showTabContent(tabName, element) {
    let tabcontent = document.querySelectorAll('.content');
    let tablinks = document.querySelectorAll('.btn');

    tabcontent.forEach((content) => {
        content.style.display = 'none';
    });

    tablinks.forEach((btn) => {
        btn.classList.remove('active');
    });

    document.getElementById(tabName).style.display = 'block';
    element.classList.add('active');

      if (element) {
        element.classList.add('active');
    }

   
}
function viewCertificate(filePath) {
  window.open(filePath, '_blank');
}

function downloadResume(){
    const link = document.createElement('a');
    link.href = 'certificate/Tharindu Weerasinghe.pdf'; // Replace with the actual path to your resume
    link.download = 'Tharindu Weerasinghe.pdf'; // The name the file will have when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

 