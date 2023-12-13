
import Article from "../models/article.js"

export const creacteArticle = async (req, res) => {
    const { title, category, body, auther } = req.body
    const image = req.file.filename
    try {
        const newArticle = await Article.create({
            title,
            category,
            body,
            auther,
            image: image
        })
        return res
            .status(200)
            .json({ message: "article created successfully", article: newArticle })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "article couldn't be created" });

    }
}
export const getALlArticles = async (req, res) => {
    try {
        const ALlArticles = await Article.findAll()
        return res
            .status(200)
            .json(ALlArticles)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "articles couldn't fetch" });

    }
}
export const getOneArticle = async (req, res) => {
    const id = req.params.id
    try {
        const article = await Article.findone({ where: { id } })
        return res.status(200).json(article)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "article couldn't fetch" });

    }
}
export const updateArticle = async (req, res, next) => {
    const id = req.params.id;
    req.body.image = req.file.path;



    try {
        const { title, category, body, auther } = req.body
        await Article.update(
            { title, category, body, auther, image: req.file.filename },
            {
                where: { id },
            }
        );
        return res.status(200).json({ message: "article updated successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Trouble updating article info" });
    }
};

export const deleteArticle = async (req, res, next) => {
    const id = req.params.id;
    try {
        await Users.destroy({ where: { id } });
        res.status(200).json({ message: "article deleted successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: " could not delete article" });
    }
};