import Page from './page.model.js';

export const createPage = async (pageBody) => {
    const slug = pagebody.name.toLowerCase().split(" ").join("-");
    pagebody.slug = slug;
    const page = new Page(pagebody);
    const pageResponse = await page.save();
    return pageResponse;
};
export const listPages = async () => {};
export const deletePage = async (id) => {};
export const updatePage = async (id, pageBody) => {};
export const pageDetails = async (id) => {};
export const savePageContent = async (id, pageContent) => {};
