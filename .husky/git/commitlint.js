"use strict";
// 默认规则
// module.exports = {
//     extends: ["@commitlint/config-conventional"] 
// };


// 规则参考 @commitlint/config-conventional

const cz = require('./commitizen.js')

module.exports = {
    rules: {
        // 提交body必须以空行开头
        "body-leading-blank": [2, "always"],

        // 提交footer应以空行开头
        "footer-leading-blank": [2, "always"],

        // 最大header长度 100 个字符
        "header-max-length": [
            2,
            "always",
            cz.subjectLimit
        ],

        // // scope 始终仅小写
        // "scope-case": [2, "always", "lower-case"],

        // // scope 不能为空
        // 'scope-enum': [
        //     1,
        //     'always',
        //     cz.scopes.map(type => type.name)
        // ],

        // subjcet 不能为空
        "subject-empty": [2, "never"],

        // subject 不得以“.”结尾
        "subject-full-stop": [2, "never", "."],

        // type 始终仅小写
        "type-case": [2, "always", "lower-case"],

        // type 不能为空
        "type-empty": [2, "never"],

        // type 必须是已知类型
        "type-enum": [
            2,
            "always",
            cz.types.map(type => type.value)
        ]
    }
};