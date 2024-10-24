<script>
    import { fetchProjects } from "./projectService.js";

    let projects = [];

    const loadProjects = async () => {
        try {
            projects = await fetchProjects();
        } catch (error) {
            console.error("Failed to load projects:", error);
        }
    };

    loadProjects();
</script>

<main class="container">
    <div class="content-wrapper">
        <section class="profile-left">
            <img
                src="images/profile.jpg"
                alt="Your Profile Picture"
                class="profile-pic"
            />
            <div class="info">
                <h1>I’m Fernanda Bacelar</h1>
                <p>DevOps Student Assistant, based in Copenhagen.</p>
            </div>
        </section>

        <section class="profile-right">
            <div class="intro-text">
                <h2>
                    I focus on Platform Engineering and Kubernetes, building
                    scalable, efficient systems. My passion lies in optimizing
                    infrastructures, automating workflows to help teams deliver
                    faster and more reliably.
                </h2>
                <div class="action-buttons">
                    <button class="primary-btn">Talk with me</button>
                    <a href="https://github.com/bacelarfc" target="_blank">
                        <button class="secondary-btn">See my work</button>
                    </a>
                </div>
            </div>

            <section class="experience">
                <h2>Working experience</h2>
                <ul>
                    {#if projects.length > 0}
                        {#each projects as project}
                            <li>
                                <span class="icon">📁</span>
                                <div class="details">
                                    <h3>{project.company}</h3>
                                    <h3>{project.role}</h3>
                                    <p>{project.responsibilities}</p>
                                    <p>{project.startDate}-{project.endDate}</p>
                                    <p>Tech Stack: {project.technologies}</p>
                                    {#if project.imageUrl}
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                        />
                                    {/if}
                                </div>
                            </li>
                        {/each}
                    {:else}
                        <p>No projects available.</p>
                    {/if}
                </ul>
            </section>
        </section>
    </div>
</main>

<link rel="stylesheet" href="./style.css" />
