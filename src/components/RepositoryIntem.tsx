import React from 'react';
interface RepositoryIntemProps {
    repository: {
        
        name: string;
        description: string;
        html_url: string;

    }
}

export function RepositoryIntem(props: RepositoryIntemProps) {
    return (
        <li>
            <strong>{props.repository.name}</strong>
            <p>{props.repository.description}</p>

            <a href={props.repository.html_url}>
                Acessar repositorio
            </a>
        </li>
    );
}