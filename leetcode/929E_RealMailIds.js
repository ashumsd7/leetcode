var numUniqueEmails = function (emails) {
    let resMail = []
    emails.map(el => {
        let splittedEmail = el.split('@')
        // let splitByPlusIcon = splittedEmail[0].split('+')
        let emailWithDots = splittedEmail[0].split('+')[0].split('')
        let emailWithoutDots = []
        for (i = 0; i < emailWithDots.length; i++)
            emailWithDots[i] !== '.' &&  emailWithoutDots.push(emailWithDots[i])
        let mainEmail = emailWithoutDots.join('') + '@' + splittedEmail[1]
        resMail.push(mainEmail)
    })
    let mainResEmailList = []
    resMail.map(mail => mainResEmailList.includes(mail) ? '' : mainResEmailList.push(mail))
    return mainResEmailList.length


};



let emails = ["a.............@b.com", "a++++++@b.com"]
console.log('numUniqueEmails', numUniqueEmails(emails))