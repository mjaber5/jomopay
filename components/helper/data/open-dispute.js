
const registerDispute = async ()=>{
    const disputeRoute = '/disputes';
    const response = await fetch('http://141.147.32.152:11443/api/dmm/v1.0'+disputeRoute,
        {
            methode:'post',
            headers:{
                 'Content-Type':'application/json',
                 'Charset':'UTF-8',
                },
            body : JSON.stringify({
                "reference": "RFAM201811280001",
                "respondent": {"BIC": "AAAAYYZZ"},
                "disputeCategory": "JoPACC Defined",
                "subject": "JoPACC Defined", 
                "message": " Description of dispute for receiver, example: There was typo in creditor account, please replace it with account 12345678998076",
                "amount": {
                    "currency": "JOD",
                    "value":500
                },
                "originalPayment": {
                    "messageId": "KTBF2018112217530001",
                    "transactionId": "KTBF2018112217530001",
                    "valueDate": "2018-11-28",
                    "orderingInstitution": {"BIC": "AAAAYYZZ"}
                }
            }
            )
        }
    );
}