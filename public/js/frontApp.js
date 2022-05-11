//selecting the elements for the first form passport photo

const prepend_small_btn1 = document.querySelector('#prepend-small-btn1');
const passport_photo1 = document.querySelector('#passport_photo1');
const file_upload1 = document.querySelector('#file_upload1');
const candidate_name1 = document.querySelector('#candidate_name1');
const student_inner_std = document.querySelector('.student-inner-std');

passport_photo1.style.display = 'none';

//selecting the elements for the second form full photo

const prepend_small_btn2 = document.querySelector('#prepend-small-btn2');
const passport_photo = document.querySelector('#passport_photo');
const file_upload = document.querySelector('#file_upload');
const candidate_name = document.querySelector('#candidate_name');

passport_photo.style.display = 'none';

file_upload1.addEventListener('change', (e)=>{
      // displaying the image after selecting from the file
      passport_photo1.style.display = 'block';

      //displaying passport photo on the page after selecting from file
       passport_photo1.src = 'img/'+ file_upload1.files[0].name;
   
       //showing the path to the file in the text box
       prepend_small_btn1.value = file_upload1.files[0].name;
   
       //displaying the name of the file under the passport photo (as the name of the file is the name of the candidate)
       candidate_name1.innerText = file_upload1.files[0].name;
   
   })

file_upload.addEventListener('change', (e)=>{
     // displaying the image after selecting from the file
     passport_photo.style.display = 'block';
   
   //displaying passport photo on the page after selecting from file
    passport_photo.src = 'img/'+ file_upload.files[0].name;

    //showing the path to the file in the text box
    prepend_small_btn2.value = file_upload.files[0].name;

    //displaying the name of the file under the passport photo (as the name of the file is the name of the candidate)
    candidate_name.innerText = file_upload.files[0].name;
    const img_hidden = student_inner_std.children[0].children[0].style.opacity = '1'

});

