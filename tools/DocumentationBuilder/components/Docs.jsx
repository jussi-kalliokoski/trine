"use strict";

import React from "react";
import { Category } from "./Category";

export class Docs extends React.Component {
    renderTableOfContents () {
        const categories = this.props.categories.map((category) => {
            const modules = category.modules.map((module) => {
                const exports = module.exports.map((exp) => {
                    return (<li key={exp.name}>
                        <a href={"#" + "categories-" + category.name + "-modules-" + module.module + "-exports-" + exp.name}>
                            <code>{ exp.name + "()" }</code>
                        </a>
                    </li>)
                });

                return (<li key={module.module}>
                    <a href={"#categories-" + category.name + "-modules-" + module.module}>{module.module}</a>
                    <ul>{exports}</ul>
                </li>);
            });

            return (<li key={category.name}>
                <a href={"#categories-" + category.name}>{category.name}</a>
                <ul>{modules}</ul>
            </li>);
        });

        return (<section id="table-of-contents">
            <h2>Table of Contents</h2>
            <ul>{categories}</ul>
        </section>);
    }

    render () {
        const categories = this.props.categories.map((category) => <Category key={category.name} category={category} />);
        return (<div className="content" role="main">
            <h1>Trine v.{this.props.version} Documentation</h1>
            { this.renderTableOfContents() }
            { categories }
        </div>)
    }
};
