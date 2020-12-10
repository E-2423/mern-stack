exports.auth_register = (req, res) => {
    //TODO: Register func.
    //req.body.firstName

    const {firstName, lastName, email, password} = req.body;
    console.log("Fields:",
      firstName, 
      lastName, 
      email,
      password
    ); 

    //TODO1:Validate the field
    // TODO2:check already registered
    //TODO3:crpyt password
    //TODO4:save the user to DB


    res.send("Register Completed.");
  };
  
  exports.auth_login = (req, res) => {
    // TODO: Auth.
    // TODO: Login func.
    res.send("Login Completed");
  };
  
