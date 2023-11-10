import React, { useState } from 'react';
import axios from 'axios';
import '../Styles.css';

const Courses = () => {
  const [formData, setFormData] = useState({ Book_Name: '', Author_Name: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/addBook', formData);
      console.log('Book saved:', response.data);
     
      alert(`${response.data.Book_Name} written by ${response.data.Author_Name} saved in the Library!`);
      setFormData({ Book_Name: '', Author_Name: '' });
    } catch (error) {
      console.error('Error saving book:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-danger vh">
      <br />
      <div className="row">
        <div className="col mx-5">
          <form className="px-5" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <label htmlFor="name" className="labels">
                  <h5>Enter the Name of the Book: </h5>
                </label>
                <input
                  style={{ width: '400px' }}
                  placeholder="Your Book Here..."
                  className="form-control inputmade"
                  name="Book_Name"
                  value={formData.Book_Name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="author" className="labels">
                  <h5>Enter the Author's name</h5>
                </label>
                <input
                  style={{ width: '400px' }}
                  placeholder="Author Here..."
                  className="form-control inputmade"
                  name="Author_Name"
                  value={formData.Author_Name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button
                className="btn btn-success my-4 mx-5"
                style={{ width: '100px', height: '50px' }}
                type="submit"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>


      <div className="row row-cols-1 row-cols-md-3 g-4 p-4">
        <div className="col">
          <div className="card">
            <img src="https://dme2wmiz2suov.cloudfront.net/User(24043368)/CourseBundles(9270)/1106088-C_Language.jpg" className="card-img-top img-card" alt=""/>
            <div className="card-body">
              <h5 className="card-title course-title">C</h5>
              <p className="card-text">
              The general-purpose programming language C is renowned for its effectiveness and low-level hardware control.
                Dennis Ritchie created it in the early 1970s, and system programming and application development across a range of industries make extensive use of it.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_CPP.jpg"
              className="card-img-top img-card" alt=""/>
            <div className="card-body">
              <h5 className="card-title course-title">C++</h5>
              <p className="card-text">A strong and adaptable programming language, C++ combines the best aspects of low-level and high-level programming. It is frequently used to create effective software applications, such as embedded devices, games, and system software.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://www.webskittersacademy.in/wp-content/uploads/2016/01/Java-As-A-Programming-Language.png"
              className="card-img-top img-card" alt=""/>
            <div className="card-body">
              <h5 className="card-title course-title">Java</h5>
              <p className="card-text">Java is a popular programming language that is well-known for its object-oriented methodology and platform independence. Java is preferred for creating scalable and secure applications across a variety of domains due to its strong libraries and broad community support.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://blog.eduonix.com/wp-content/uploads/2018/09/Scientific-Python-Scipy.jpg"
              className="card-img-top img-card" alt=""/>
            <div className="card-body">
              <h5 className="card-title course-title">Python</h5>
              <p className="card-text">Python is a strong and flexible programming language that is well-liked by both novice and seasoned programmers due to its ease of usage and readability. Python provides a wealth of libraries and frameworks that enable programmers to create a vast array of applications.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://www.papasiddhi.com/wp-content/uploads/2022/02/javascript-1110x550.png"
              className="card-img-top img-card" alt=""/>
            <div className="card-body">
              <h5 className="card-title course-title">JavaScript</h5>
              <p className="card-text">JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps etc.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://i.ytimg.com/vi/_5dhv8a7_3U/maxresdefault.jpg" className="card-img-top img-card" alt=""/>
            <div className="card-body">
              <h5 className="card-title course-title">Rust</h5>
              <p className="card-text">Rust is a multi-paradigm, general-purpose programming language that emphasizes performance, type safety, and concurrency. It enforces memory safety, meaning that all references point to valid memory, without using garbage collection.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Courses;