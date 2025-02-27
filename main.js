// 要素を取得
const nameInput = document.getElementById('name');
const genderInputs = document.getElementsByName('gender'); // 修正: ラジオボタンをグループで取得

// localStorageに保存
nameInput.addEventListener('input', () => {
    const name = nameInput.value;
    console.log(name);
    localStorage.setItem("name", name);
});

// ラジオボタンの選択が変更されたときにlocalStorageに保存
genderInputs.forEach(genderInput => { // 修正: 各ラジオボタンにイベントリスナーを追加
    genderInput.addEventListener('change', () => {
        const selectedGender = document.querySelector('input[name="gender"]:checked'); // 修正: 選択されたラジオボタンを取得
        if (selectedGender) {
            const gender = selectedGender.value;
            console.log(gender);
            localStorage.setItem("gender", gender);
        }
    });
});