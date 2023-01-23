import './pageNews.css';

const PageNews = () => {
	return(
		<>
		<div className="news">
			<h1>Название: </h1>
			<div className="news__content">Содержание: </div>
			<a>Ссылка на оригинал</a><br></br>
			<button className="news__comments">Комментарии</button>
		</div>
		</>
	)
}

export default PageNews;
