<script lang="ts">
	import Fa from "svelte-fa";
    import { faCheck } from '@fortawesome/free-solid-svg-icons'

    export let id: string;
    export let employer: string;
    export let employer_logo: string;
    export let job_title: string;
    export let description: string;
    export let salary_min: string;
    export let salary_max: string;
    export let excluded_disabilities: string;
    export let type_of_employment: string;
    export let location: string;
    // export let categories;
    // export let file;
    let src = "http://156.17.72.125:3001/get_logo?filename=" + employer_logo;
</script>

<a href="job-offer/{id}">
    <article>
        <div class="left">
            <img src="{src}" alt="{employer}" id="employer_logo">
        </div>
        <div class="right">
            <div class="top">
                <span class="job_title">{job_title}</span>
                <span class="">
                    <Fa icon={faCheck} color="#00ff00" />
                    Przystosowane dla osób niepełnosprawnych
                </span>
                <span class="job_salary">{salary_min} - {salary_max} PLN</span>
            </div>
            <div class="bottom">
                <span class="job_type">Typ umowy: {type_of_employment}</span>
                <div class="tags">
                    <span>Wykluczone niepełnosprawności:</span>
                    <span class="disability">{excluded_disabilities}</span>
                </div>
                <span class="job_location">{location}</span>
            </div>
        </div>
    </article>
</a>

<style lang="scss">
    article {
        color: white;
        display: flex;
        box-shadow: rgba(0, 0, 0, 0.06) 0px 1px 2px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
        padding: 20px 10px;
        border-radius: 6px;
        background: #2a2a2a;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 1px 9px 15px -5px rgba(25, 25, 25, 0.2);
        }

        .left {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 90px;
                height: 45px;
                border-radius: 5px;
            }
        }

        .right {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin: 0 15px;
            width: 100%;

            .top {
                display: flex;
                justify-content: space-between;
            }

            .bottom {
                display: flex;
                justify-content: space-between;
            }
        }

        .job_title {
            font-size: 20px;
            font-weight: 600;
        }

        .job_salary {
            font-size: 18px;
        }

        .job_type {
            font-size: 16px;
        }

        .tags {
            .disability {
                border: 2px solid #ff7206;
                border-radius: 20px;
                padding: 2px 10px;
                color: #ff7206;
            }
        }

        .job_location {
            margin-left: 10px;
            font-size: 16px;
        }

    }
</style>
