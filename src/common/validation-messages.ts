const validationMessages = {
  AuthorNameRequired: 'The author name field is required.',
  AuthorNameType: 'The author name field type should be a string.',
  NonNumericFieldType: 'Only number in this field is not allowed.',
  AuthorBioType: 'The author bio field type should be a string.',
  AuthorBirthDateType:
    'The author date of birth field type should be in date format like YYYY-MM-DD.',
  BookTitleRequired: 'The book title field is required.',
  BookTitleType: 'The book title field type should be a string.',
  DescriptionType: 'Description field type should be a string.',
  PublishedDateType:
    'PUblished Date type should be in date format like YYYY-MM-DD.',
  AuthorIdRequired: 'The author_id field is required.',
  AuthorIdType: 'The author_id field type should be a string.',
  AuthorIdNotExist: 'The author_id does not exist.',
};

export default validationMessages;
