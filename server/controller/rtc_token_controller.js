const { RtcTokenBuilder, RtcRole } = require("agora-access-token");

const generateToken = async (req, res) => {
  const { channelName, isPublisher } = req.body;
  console.log(req.body);
  const appID = "19640a9b4858430593643c0f0d88aa04";
  const appCertificate = "4aed90dd68cc40aa89d7d8e47412fb62";
  // console.log(req.body);
  try {
    const uid = Math.floor(Math.random() * 100000);
    const expirationTimeInSeconds = 3600;
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;
    const role = isPublisher ? RtcRole.PUBLISHER : RtcRole.SUBSCRIBER;
    const token = RtcTokenBuilder.buildTokenWithUid(
      appID,
      appCertificate,
      channelName,
      uid,
      role,
      privilegeExpiredTs
    );
    console.log(uid, token);
    if (!token) {
      res.status(400).send("can't generate token");
    }
    res.status(200).send({ uid: uid, token: token });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
module.exports = { generateToken };
