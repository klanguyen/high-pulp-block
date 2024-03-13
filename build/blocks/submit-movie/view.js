/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/submit-movie/components/AddMovieForm.js":
/*!************************************************************!*\
  !*** ./src/blocks/submit-movie/components/AddMovieForm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddMovieForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var image;
class AddMovieForm extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  state = {
    title: '',
    description: '',
    posterId: '',
    genres: [],
    voteCount: 0,
    submittedBy: ''
  };
  openMediaLibrary(e) {
    e.preventDefault();
    image = wp.media({
      title: 'Upload Image',
      type: 'image',
      multiple: false,
      button: {
        text: 'Done'
      }
    }).open();
    image.on('select', e => {
      var uploadedImgId = image.state().get('selection').first().toJSON().id;
      //jQuery('input#imageId').val(uploadedImgId);
      this.setState({
        posterId: uploadedImgId
      });
    });
  }
  handleCheckboxChange(e) {
    let newArray = [...this.state.genres, e.target.value];
    if (this.state.genres.includes(e.target.value)) {
      newArray = newArray.filter(genre => genre !== e.target.value);
    }
    this.setState({
      genres: newArray
    });
  }
  addMovie(e) {
    e.preventDefault();

    //this.state.posterId = parseInt(jQuery('input#imageId').val());
    console.log(this.state.posterId);
    const newMovie = {
      title: this.state.title,
      content: this.state.description,
      featured_media: this.state.posterId,
      acf: {
        movie_genres: this.state.genres,
        movie_vote_count: parseInt(this.state.rating) || 0,
        movie_submitted_by: this.state.submittedBy
      },
      // maybe you should validate better before doing this?
      status: 'publish'
    };

    // we can't assume any props are provided
    // ?. only calls the method if it exists
    this.props.addMovie?.(newMovie);
    this.setState({
      title: '',
      description: '',
      posterId: '',
      genres: '',
      submittedBy: ''
    });
    jQuery(document.querySelectorAll('input[name="genres"]').forEach(el => el.checked = false));
  }
  render() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
      className: "new-movie-form",
      onSubmit: e => this.addMovie(e)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Title:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      value: this.state.title,
      onInput: e => this.setState({
        title: e.target.value
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Poster Image"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      onClick: e => this.openMediaLibrary(e)
    }, "Upload Image")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Description:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
      value: this.state.description,
      onInput: e => this.setState({
        description: e.target.value
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Genres:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "checkbox",
      id: "horror",
      value: "Horror",
      name: "genres",
      onChange: e => this.handleCheckboxChange(e)
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "horror"
    }, "Horror"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "checkbox",
      id: "action",
      value: "Action",
      name: "genres",
      onChange: e => this.handleCheckboxChange(e)
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "action"
    }, "Action"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "checkbox",
      id: "sci-fi",
      value: "Sci-Fi",
      name: "genres",
      onChange: e => this.handleCheckboxChange(e)
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "sci-fi"
    }, "Sci-Fi"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "checkbox",
      id: "drama",
      value: "Drama",
      name: "genres",
      onChange: e => this.handleCheckboxChange(e)
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "drama"
    }, "Drama"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "checkbox",
      id: "mystery",
      value: "Mystery",
      name: "genres",
      onChange: e => this.handleCheckboxChange(e)
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "mystery"
    }, "Mystery"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "checkbox",
      id: "comedy",
      value: "Comedy",
      name: "genres",
      onChange: e => this.handleCheckboxChange(e)
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "comedy"
    }, "Comedy")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Submitted by:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      value: this.state.submittedBy,
      onInput: e => this.setState({
        submittedBy: e.target.value
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "submit"
    }, "Add Movie"));
  }
}
;

/***/ }),

/***/ "./src/blocks/submit-movie/components/BlockApp.js":
/*!********************************************************!*\
  !*** ./src/blocks/submit-movie/components/BlockApp.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlockApp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AddMovieForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddMovieForm */ "./src/blocks/submit-movie/components/AddMovieForm.js");
/* harmony import */ var _MovieList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MovieList */ "./src/blocks/submit-movie/components/MovieList.js");




class BlockApp extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  state = {
    movies: [],
    loggedIn: null
  };
  addMovie(newMovie) {
    const movie = new wp.api.models.Movie(newMovie);
    movie.save().done(data => {
      console.log('Successfully added movie!', data);
      this.getMovies();
    }).fail(jqXHR => {
      console.error('Failed adding movie!', jqXHR);
    });
  }
  getMovies() {
    // by default, this gives us 10 results
    const movieCollection = new wp.api.collections.Movie();
    movieCollection.fetch({
      data: {
        _embed: true
      }
    }).done(data => {
      console.log('Successfully fetched!', data, movieCollection);
      // store the models in our state
      this.setState({
        movies: movieCollection.models
      });
    }).fail(jqXHR => {
      console.error('Failed fetching!', jqXHR);
    });
  }
  getLoggedInUser() {
    const user = new wp.api.models.UsersMe(); // get logged in user
    user.fetch().done(user => {
      // logged in
      this.setState({
        loggedIn: true
      });
    }).fail(jqXHR => {
      // not logged in
      this.setState({
        loggedIn: false
      });
    });
  }
  componentDidMount() {
    this.getMovies();
    this.getLoggedInUser();
  }
  render() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "vote-section"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Latest Movies"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MovieList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      movies: this.state.movies
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "vote-button",
      onClick: e => this.updateMovie(e)
    }, "Vote")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Submit a Movie"), this.state.loggedIn === true && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AddMovieForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
      addMovie: movieObj => this.addMovie(movieObj)
    }), this.state.loggedIn === false && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "error-msg"
    }, "You must be logged in to submit a movie"));
  }
}

/***/ }),

/***/ "./src/blocks/submit-movie/components/MovieCard.js":
/*!*********************************************************!*\
  !*** ./src/blocks/submit-movie/components/MovieCard.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MovieCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class MovieCard extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    let {
      title,
      description,
      posterUrl,
      genres,
      voteCount,
      submittedBy
    } = this.props;
    return (
      /*<div className="movie-card">
      	<div className="movie-info">
      		<div className="movie-header">
      			<img className="movie-poster" src={posterUrl} />
      			<h4 dangerouslySetInnerHTML={{__html: title}}></h4>
      			<span>Submitted by: {submittedBy}</span>
      			<ul className="movie-genres">
      				{genres.map(genre => (
      					<li className="genre-item">{genre}</li>
      				))}
      			</ul>
      		</div>
      		<div className="movie-description" dangerouslySetInnerHTML={{__html: description}}>
      		</div>
      		<div><p>{voteCount} votes</p></div>
      	</div>
      </div>*/
      (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "movie-card"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
        className: "movie-wrapper"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
        type: "radio",
        name: "movie-of-the-month",
        className: "movie-input"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "movie-info"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: posterUrl,
        className: "movie-image"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "movie-data"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
        className: "movie-title",
        dangerouslySetInnerHTML: {
          __html: title
        }
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Submitted by: ", submittedBy), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
        className: "movie-genres"
      }, genres.map(genre => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        className: "genre-item"
      }, genre))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "movie-description",
        dangerouslySetInnerHTML: {
          __html: description
        }
      })))))
    );
  }
}

/***/ }),

/***/ "./src/blocks/submit-movie/components/MovieList.js":
/*!*********************************************************!*\
  !*** ./src/blocks/submit-movie/components/MovieList.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MovieList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MovieCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovieCard */ "./src/blocks/submit-movie/components/MovieCard.js");



class MovieList extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "movie-list"
    }, this.props.movies.map(movie => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MovieCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: movie.attributes.title.rendered,
      description: movie.attributes.content.rendered,
      posterUrl: movie.attributes._embedded['wp:featuredmedia']['0'].source_url,
      genres: movie.attributes.acf.movie_genres,
      voteCount: movie.attributes.acf.movie_vote_count,
      submittedBy: movie.attributes.acf.movie_submitted_by,
      key: movie.attributes.id
    })));
  }
}

/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************************!*\
  !*** ./src/blocks/submit-movie/view.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _components_BlockApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BlockApp */ "./src/blocks/submit-movie/components/BlockApp.js");



const blocks = document.querySelectorAll('.wp-block-kn-submit-movie');
blocks.forEach(block => {
  (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(block).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BlockApp__WEBPACK_IMPORTED_MODULE_2__["default"], null));
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map