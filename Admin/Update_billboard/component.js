export function putData(target_url, FormData, responseFunction) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", getCookie("Authorization"));

    const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: FormData,
        redirect: 'follow'
    };

    fetch(target_url, requestOptions)
        .then(response => response.text())
        .then(result => responseFunction(JSON.parse(result)))
        .catch(error => console.log('error', error));
}