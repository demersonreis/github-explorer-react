import React from 'react';
import { useState, useEffect } from "react";
import { RepositoryIntem } from "./RepositoryIntem";
import '../styles/repositories.scss';

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);

    return (
        <section className="respository-list">
            <h1>
                Lista de repositórios
            </h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryIntem key={repository.name} repository={repository} />
                })}
            </ul>
        </section>
    );
}