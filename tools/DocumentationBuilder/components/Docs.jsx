"use strict";

import React from "react";
import { Category } from "./Category";

export class Docs extends React.Component {
    renderTableOfContents () {
        const categories = this.props.categories.map((category) => {
            const modules = category.modules.map((module) => {
                const exports = module.exports.map((exp) => {
                    return (<li key={exp.name} className="nav__exports__item">
                        <a href={"#" + "categories-" + category.name + "-modules-" + module.module + "-exports-" + exp.name}>
                            <code>{ exp.name + "()" }</code>
                        </a>
                    </li>)
                });

                return (<li key={module.module} className="nav__modules__item">
                    <a href={"#categories-" + category.name + "-modules-" + module.module}>{module.module}</a>
                    <ul className="nav__exports">{exports}</ul>
                </li>);
            });

            return (<li key={category.name} className="nav__category__item">
                <a href={"#categories-" + category.name}>{category.name}</a>
                <ul className="nav__modules">{modules}</ul>
            </li>);
        });

        return (<nav className="nav"><section id="table-of-contents">
            <ul className="nav__category">{categories}</ul>
        </section></nav>);
    }

    render () {
        const categories = this.props.categories.map((category) => <Category key={category.name} category={category} />);
        return (<div className="container"><div className="content" role="main">
            <h1>Trine v.{this.props.version} Documentation</h1>
            { categories }
        </div>{ this.renderTableOfContents() }
        </div>)
    }
};
