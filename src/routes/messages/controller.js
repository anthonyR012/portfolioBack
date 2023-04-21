
const TABLE = 'messages';

async function insertMessage (instances, db, callback, body){
  const { message, name, email, subject } = body;
  if (name && message && name && email && subject) {
    const data = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    instances.setDoc(instances.doc(db,TABLE, data.email), data);
    callback(data);
  } else {
    callback({"error":"missing parameters"});
  }
}


module.exports = {
  insertMessage
}