const BASE_URL = 'http://206.189.91.54/api/v1/auth/';

// register user data, function should only be passed an object with email, password, and password_confirmation
async function createUser(userData) {
    const response = await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            "email": userData.email,
            "password": userData.password,
            "password_confirmation": userData.password_confirmation
        }
    });
    const data = await response.json();
    return data;
}


//login. save the response headers somewhere to use in the sendMessage function
async function loginUser(userData) {
    const response = await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            "email": userData.email,
            "password": userData.password,
        }
    });
    const data = await response.json();
    return data;
}


//send message. Get header data from the login response headers
async function sendMessage(userData) {
    const response = await fetch(`${BASE_URL}messages`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'access-token': userData.access_token,
            'client': userData.client,
            'uid': userData.uid,
            'expiry': userData.expiry,
        },
        body: {
            "receiver_id": userData.receiver_id,
            "receiver_class": userData.receiver_class,
            "body": userData.body,
        }
    });
    const data = await response.json();
    return data;
}


//get messages. Get header data from the login response headers
async function getMessages(userData) {
    const response = await fetch(`${BASE_URL}messages`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'access-token': userData.access_token,
            'client': userData.client,
            'uid': userData.uid,
            'expiry': userData.expiry,
        },
    });
    const data = await response.json();
    return data;
}


//create channel with members
async function createChannel(userData) {
    const response = await fetch(`${BASE_URL}channels`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'access-token': userData.access_token,
            'client': userData.client,
            'uid': userData.uid,
            'expiry': userData.expiry,
        },
        body: {
            "name": userData.name,
            "user_ids": userData.user_ids,
        }
    });
    const data = await response.json();
    return data;
}


//get all user's channels
async function getChannels(userData) {
    const response = await fetch(`${BASE_URL}channels`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'access-token': userData.access_token,
            'client': userData.client,
            'uid': userData.uid,
            'expiry': userData.expiry,
        },
    });
    const data = await response.json();
    return data;
}


//get channel details via channel id
async function getChannelDetails(userData) {
    const response = await fetch(`${BASE_URL}channels/${userData.channel_id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'access-token': userData.access_token,
            'client': userData.client,
            'uid': userData.uid,
            'expiry': userData.expiry,
        }
    });
    const data = await response.json();
    return data;
}


//add member to a channel
async function addMember(userData) {
    const response = await fetch(`${BASE_URL}channels/${userData.channel_id}/add_member`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'access-token': userData.access_token,
            'client': userData.client,
            'uid': userData.uid,
            'expiry': userData.expiry,
        },
        body: {
            "id": userData.id,
            "member_id": userData.member_id,
        }
    });
    const data = await response.json();
    return data;
}


//list of all users
async function getUsers(userData) {
    const response = await fetch(`${BASE_URL}users`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'access-token': userData.access_token,
            'client': userData.client,
            'uid': userData.uid,
            'expiry': userData.expiry,
        }
    });
    const data = await response.json();
    return data;
}

export {
    createUser,
    loginUser,
    sendMessage,
    getMessages,
    createChannel,
    getChannels,
    getChannelDetails,
    addMember,
    getUsers,}
    