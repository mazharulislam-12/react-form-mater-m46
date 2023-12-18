
const SimpleFrom = () => {

    const handleSubmti = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log('form submit');
    }

    return (
        <div>
            <form onSubmit={handleSubmti}>
                <input type="text" name="name" />
                <br />
                <input type="text" name="email" />
                <br />
                <input type="text" name="phone" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
};

export default SimpleFrom;