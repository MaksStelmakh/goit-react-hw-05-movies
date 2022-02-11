export default function Publication({ item }) {
  console.log(item);
  return (
    <div>
      <h2>{item.original_title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" />
      <p>{item.overview}</p>
      <ul>
        {item.genres.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
