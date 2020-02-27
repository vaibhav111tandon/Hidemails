window.onload = function(){

    let emailClass = document.getElementsByClassName('email');

    let totalEmailLinks = emailClass.length;

    for(let index = 0; index <= totalEmailLinks; index++){

        let username = emailClass[index].getAttribute('data-username');
        let domain = emailClass[index].getAttribute('data-domain');

        let emailLink = username + '@' + domain;
        let emailLinkUri = "mailto:" + emailLink;

        let encodedEmailLink = encodeURI(emailLink);
        let encodedEmailLinkUri = encodeURI(emailLinkUri);

        emailClass[index].setAttribute('href', encodedEmailLinkUri);
        emailClass[index].innerHTML = encodedEmailLink;
    }
}