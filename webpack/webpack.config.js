module.exports = ({mode}) => {
    console.log(mode);
    return {
        output: {
            filename: "bundle.js"
        },
        mode
    };
};
