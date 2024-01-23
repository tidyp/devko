function uploadProfilePicture() {
    // 파일 입력 요소 가져오기
    var fileInput = document.getElementById('fileInput');

    // 선택된 파일이 있는지 확인
    if (fileInput.files.length > 0) {
        // FormData 객체 생성
        var formData = new FormData();

        // 파일 추가
        formData.append('file', fileInput.files[0]);

        // 서버로 파일 전송 (AJAX를 사용)
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'upload.php', true);

        // 업로드 완료 후 처리
        xhr.onload = function () {
            if (xhr.status === 200) {
                // 프로필 사진 업로드 성공 시 이미지 갱신
                var profilePicture = document.getElementById('profilePicture');
                profilePicture.src = xhr.responseText;
            } else {
                // 업로드 실패 시 메시지 출력
                console.error('프로필 사진 업로드 실패');
            }
        };

        // FormData를 전송
        xhr.send(formData);
    } else {
        // 파일이 선택되지 않은 경우
        console.error('파일을 선택하세요.');
    }
}
