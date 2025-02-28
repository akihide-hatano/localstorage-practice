// 要素を取得
const nameDisplay = document.getElementById('nameDisplay');
const genderDisplay = document.getElementById('genderDisplay');
const hobbyDisplay = document.getElementById('hobbyDisplay');

// ページ読み込み時にローカルストレージからデータを取得し、表示
    // 氏名の復元
    const storedName = localStorage.getItem('name');
    if (storedName) {
        nameDisplay.textContent += '氏名:'+storedName;
    };
    // 性別の復元
    const storedGender = localStorage.getItem('gender');
    if (storedGender) {
        genderDisplay.textContent += '性別:'+storedGender;
    };
    // 趣味の復元
    const storedHobbies = localStorage.getItem('hobby');
    if (storedHobbies) {
        const parsedHobbies = JSON.parse(storedHobbies);
        hobbyDisplay.textContent += '趣味:'+parsedHobbies.join(', ');
    };