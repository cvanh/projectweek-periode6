export const SetChache = (req,res) => {
    res.setHeader('Cache-Control', 'public,max-age=10000');
}