import React from 'react';
import './repo.less'


const Repo = (props) => {
    const repo = props.repo

    return (
        <div className="repo">
            <div className="repo-header">
                <div className="repo-header-name">
                    <a href={repo.html_url} target={"_blank"}>{repo.name}</a>
                </div>
                <div className="repo-header-date">Коммит загружен: {repo.pushed_at}</div>
            </div>
            <div className="repo-watchers-count"> Просмотров: {repo.watchers_count}</div>
            <div className="repo-description">Описание коммита: <span>{repo.description} </span> </div>
        </div>
    );
};

export default Repo;