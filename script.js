'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const promoImg = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        films = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        input = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');
    
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = input.value;
        const favorite = checkbox.checked;
       
        if (newFilm.trim()) {
            if (newFilm.length >= 22) {
                newFilm = `${newFilm.substring(0, 21)}...`;
            }
            if (favorite) {
            alert('Добавляем любимый фильм');
            }
            movieDB.movies.push(newFilm);
            sortArray(movieDB.movies);
            createMovieList(movieDB.movies, films);
        } 

        
        e.target.reset();
    });

    

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    deleteAdv(promoImg);
    
    const makeChanges = () => {
        genre.textContent = 'Драма';
        poster.style.backgroundImage = "url('img/bg.jpg')";
    };
    makeChanges();
        
    const sortArray = (arr) => {
       arr.sort();
    };
     

    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArray(films);
        
        films.forEach((title, i) => {
        parent.innerHTML += `
            <li class="promo__interactive-item">${i+1}. ${title}
                <div class="delete"></div>
            </li>
        `;
            
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });
        });     
    });
    }
    createMovieList(movieDB.movies, films);
    
});
             