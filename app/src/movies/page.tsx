// import clientPromise from "../../lib/mongodb";

// const Movies = async () => {
//   const client = await clientPromise;
//   const db = client.db("VNR");
//   const movies = await db
//     .collection("user")
//     .find({})
//     .sort({ metacritic: -1 })
//     .limit(20)
//     .toArray();
//   console.log(movies, "user");
//   console.log(1);

//   return (
//     <div>
//       <h1>Top 20 Movies of All Time????</h1>
//       <p>
//         <small>(According to Metacritic)</small>
//       </p>
//       <ul>
//         {movies.map((x) => {
//           console.log(movies, "Current Movie");
//           console.log(2);
//           return (
//             <li key={x._id.toString()}>
//               <h2>{x.name}</h2>
//               <h3>{x.description}</h3>
//               <p>{x.email}</p>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Movies;