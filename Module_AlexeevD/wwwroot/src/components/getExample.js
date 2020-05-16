const token = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYWFhYUBwcmkucnUiLCJqdGkiOiIzNTJjOWZmZi0wYzNkLTQ2ZjctYWE2Yi1iYjIyOGMyODAxZTkiLCJleHAiOjE1ODk2NjA5NjEsImlzcyI6ImxvY2FsaG9zdCIsImF1ZCI6ImxvY2FsaG9zdCJ9.5Syg_g1PgbXQOo3aYFy2GJtLegXnJo_Fw0-aCif6nns'

    const getUser = () => {
        const myHeaders = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });

        return fetch('https://localhost:44314/User/Get/pri@pri.ru', {
            method: 'GET',
            headers: myHeaders,
        }).then(res => console.log(res.json()))
            
    }