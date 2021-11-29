import React from 'react';

import { Wrapper, Content } from './CreateCourse.style.js';

import Input from '../../common/Input/Input.jsx';
import Button from '../../common/Button/Button.jsx';

const CreateCourse = ({
	courses,
	handleChange,
	handleKeyDown,
	createNewAuthor,
	authors,
	courseAuthor,
	courseDuration,
	addCourseAuthor,
	deleteCourseAuthor,
	createNewCourse,
}) => {
	return (
		<Wrapper>
			<Content>
				<form id='createCourseForm' onSubmit={createNewCourse}>
					<div className='course-info'>
						<div className='course-info__row'>
							<div className='course-info__col course-info__col--halfsize'>
								<Input
									inputType='text'
									inputName='title'
									inputPlaceholder='Enter title...'
									labelText='Title'
									value={courses.title}
									onChange={handleChange}
								/>
							</div>
							<div className='course-info__col course-info__col--endcontent'>
								<Input
									inputType='submit'
									inputName='addCourse'
									inputValue='Create Course'
								/>
							</div>
						</div>
						<div className='course-info__row course-info__row--full'>
							<div className='course-info__col'>
								<Input
									inputType='textarea'
									inputName='description'
									inputPlaceholder='Enter description'
									labelText='Description'
									value={courses.description}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className='course-info__row'>
							<div className='course-info__col pr-25'>
								<h3>Add author</h3>
								<Input
									inputType='text'
									inputName='author'
									inputPlaceholder='Enter author name...'
									labelText='Author name'
									value={courses.author}
									onChange={handleChange}
								/>
								<Button
									type='submit'
									buttonText='Create author'
									onClick={createNewAuthor}
								/>
							</div>
							<div className='course-info__col course-info__col--centercontent pl-25'>
								<h3>Authors</h3>
								{authors.length ? (
									authors.map((item) => (
										<div className='course-info__row' key={item.id}>
											<div className='course-info__col'>{item.name}</div>
											<div className='course-info__col'>
												<Button
													type='submit'
													buttonText='Add author'
													onClick={(e) => addCourseAuthor(e, item.id)}
												/>
											</div>
										</div>
									))
								) : (
									<div className='course-info__row course-info__row--full'>
										<div className='course-info__col course-info__col--centercontent'>
											Author list is empty
										</div>
									</div>
								)}
							</div>
						</div>
						<div className='course-info__row'>
							<div className='course-info__col pr-25'>
								<h3>Duration</h3>
								<Input
									inputType='number'
									inputName='duration'
									inputPlaceholder='Enter duration in minutes...'
									labelText='Duration'
									min='0'
									value={courses.duration}
									onChange={handleChange}
									onKeyDown={handleKeyDown}
								/>
								<div className='course-info__row course-info__row--full'>
									<p className='course-info__duration'>
										Duration: <span>{courseDuration}</span> hours
									</p>
								</div>
							</div>
							<div className='course-info__col course-info__col--centercontent pl-25'>
								<h3>Course authors</h3>
								{courseAuthor.length ? (
									courseAuthor.map((author) => (
										<div className='course-info__row' key={author.id}>
											<div className='course-info__col'>{author.name}</div>
											<div className='course-info__col course-info__col--startcontent pl-25'>
												<Button
													type='submit'
													buttonText='Delete author'
													onClick={(e) => deleteCourseAuthor(e, author.id)}
												/>
											</div>
										</div>
									))
								) : (
									<div className='course-info__row course-info__row--full'>
										<div className='course-info__col course-info__col--centercontent'>
											Author list is empty
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</form>
			</Content>
		</Wrapper>
	);
};

export default CreateCourse;
