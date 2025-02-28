// 要素を取得
const nameInput = document.getElementById('name');
const genderInputs = document.getElementsByName('gender'); // 修正: ラジオボタンをグループで取得
const hobbyInputs = document.getElementsByName('hobby');

// localStorageに保存
nameInput.addEventListener('input', () => {
    const name = nameInput.value;
    console.log(name);
    localStorage.setItem("name", name);
});


//gemderをstorageに保存
genderInputs.forEach(radioButton=>{
    radioButton.addEventListener("change",()=>{
        const selectdGender = document.querySelector('input[name="gender"]:checked').value ;
        console.log(selectdGender);
        localStorage.setItem("gender",selectdGender);
    })
});

//hobbyをstorageに保存
hobbyInputs.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const selectedHobbies = Array.from(document.querySelectorAll('input[name="hobby"]:checked')).map(checkbox => checkbox.value); // 選択されたチェックボックスの値を配列として取得
        console.log(selectedHobbies);
        localStorage.setItem("hobby", JSON.stringify(selectedHobbies)); // 配列をJSON文字列に変換して保存
    });
});

