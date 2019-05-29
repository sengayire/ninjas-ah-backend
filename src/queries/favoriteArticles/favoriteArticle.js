import db from '../../models';

/**
 * @param {int} userId
 * @param {string} articleSlug
 * @returns {object} returns the user Id and the slug of the article in a object
 */
export default async (userId, articleSlug) => {
  try {
    const favoritedArticle = await db.FavoriteArticle.create(
      { userId, articleSlug },
      { logging: false }
    );

    return favoritedArticle.get();
  } catch (error) {
    return {
      errors: error
    };
  }
};
