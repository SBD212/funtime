import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  //const userId = req.session.userId;
  const client = await clientPromise;
  const db = client.db("FunTime");

  switch (req.method) {
    case "GET": {
      try {
        const allLikes = await db
          .collection("Likes")
          .find({ })
          .toArray();

        return res.json(allLikes);
      } catch (e) {
        return res.json({
          message: new Error(error).message,
          success: false,
        });
      }
    }

    case "POST": {
      try {
        const likedActivity = JSON.parse(req.body);

        await db.collection("Likes").insertOne(likedActivity);
        return res.json({
          message: "Activity saved successfully",
          success: true,
        });
      } catch (e) {
        return res.json({
          message: new Error(error).message,
          success: false,
        });
      }
    }

    case "DELETE": {
      try {
        // Unlike the activity

        const deleteActivity = JSON.parse(req.body);
        await db.collection("Likes").deleteOne({
          organisation: deleteActivity.organisation,
          userId: deleteActivity.userId,
        });

        return res.json({
          message: "Activity unliked successfully",
          success: true,
        });
      } catch (error) {
        // returning an error
        return res.json({
          message: new Error(error).message,
          success: false,
        });
      }
    }
  }
}
