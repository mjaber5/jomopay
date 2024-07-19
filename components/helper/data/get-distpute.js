const [disputes, setDisputes] = useState([]);
    useEffect(() => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "RlJBTEpPMjdBWFhYOjEyMzQ1Njc4"
            }
        };
        fetch("http://141.147.32.152:11443/api/dmm/v1.0/disputes", requestOptions)
            .then(response => response.json())
            .then(data => {
                setDisputes(data.disputes);
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching disputes:', error);
            });
    }, []);