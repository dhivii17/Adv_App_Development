
import '../Styles/News.css'; // Don't forget to create a corresponding News.css file for styling

const News = () => {
  // Sample list of news articles
  const newsArticles = [
    {
      id: 1,
      title: 'Exciting Event Coming Soon',
      content: 'Sports Event Management involves planning, organizing, and executing various aspects of sports events to ensure they run smoothly and successfully.',
      date: '2024-02-01',
      image: 'https://images.pexels.com/photos/8688529/pexels-photo-8688529.jpeg?auto=compress&cs=tinysrgb&w=600', // Add the image file name or URL
      eventName: 'Sports Event 2024', // Add the event name
    },
    {
        id: 2,
        title: 'Exciting Event Coming Soon',
        content: 'A corporate event is a gathering sponsored by a business for its employees, clients, stakeholders, or prospective clients. These events can vary widely in scale and purpose, ranging from small team-building activities to large-scale conferences or product launches.',
        date: '2024-03-01',
        image: 'https://images.pexels.com/photos/5668842/pexels-photo-5668842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Add the image file name or URL
        eventName: 'Cooperate Event 2024', // Add the event name
      },
    // Add more news articles as needed
  ];

  return (
    <div className="news-container">
      <h2 className="news-heading">Latest News</h2>
      <ul className="news-list">
        {newsArticles.map((article) => (
          <li key={article.id} className="news-item">
            <div className="news-header">
              <img src={article.image} alt={article.eventName} className="news-image" />
              <div className="news-details">
                <h3 className="news-title">{article.title}</h3>
                <p className="news-event-name">{article.eventName}</p>
                <span className="news-date">{article.date}</span>
              </div>
            </div>
            <p className="news-content">{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
