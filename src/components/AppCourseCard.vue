<script>
export default {
    name: "AppCourseCard",
    props: {
        course: Object
    },
    methods: {
        isFiveStar(votesArray) {
            console.log("VotesArray", votesArray);
            // Method return true if average vote is 5 
            let averageVote = 0;
            votesArray.forEach(vote => {
                console.log("vote", vote);
                averageVote += vote;
                console.log("added", averageVote);
            });

            averageVote = averageVote / votesArray.length;
            console.log(averageVote);

            if (averageVote === 5) {
                return true;
            } else {
                return false;
            }
        },
        getImagePath(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    }
}
</script>

<template>
    <section class="course-card">
        <div class="course-image">
            <img :src="getImagePath(`../assets/img/${course.thumbnail}`)" :alt="course.name">
            <div v-if="course.featured" class="course-featured-band"></div>
            <div class="course-sticker-container">
                <div v-if="course.subscriptions > 50" class="course-sticker hot"></div>
                <div v-if="course.special" class="course-sticker special"></div>
            </div>
        </div>

        <div class="course-info p-3" :class="{ 'course-featured': course.featured }">
            <span class="course-category d-block">{{ course.category[0] }} &gt</span>
            <h5 class="course-name">{{ course.name }}</h5>
            <div class="course-card-bottom d-flex justify-content-between">
                <span class="five-star" v-if="isFiveStar(course.vote)">
                    <i v-for="n in 5" :key="n" class="fa-solid fa-star"></i>
                    5
                </span>
                <span v-else class="course-duration">
                    <i class="fa-regular fa-clock"></i>
                    {{ course.duration }} hours
                </span>
                <span class="course-cost" v-if="course.cost === 0">
                    Free
                </span>
                <span v-else-if="isNaN(course.cost)"></span>
                <span v-else>${{ course.cost - ((course.cost / 100) * course.discount) }}</span>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables" as *;

.course-card {
    // DEBUG
    width: 100%;
    max-width: 300px;
    height: 300px;
    overflow: hidden;

    .course-image {
        position: relative;
        height: 50%;
        width: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }

        .course-featured-band {
            width: 150px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            position: absolute;
            top: 0px;
            left: 0px;
            transform: rotate(-45deg) translate(-40px, -20px);
            background-color: $col-featured;
            color: $col-white;
            font-size: 0.7rem;
            font-weight: 500;
        }

        .course-featured-band::after {
            content: "FEATURED";
        }

        .course-sticker-container {
            position: absolute;
            top: 5px;
            right: 5px;
            display: flex;
            flex-direction: row-reverse;

            .course-sticker {
                color: $col-white;
                font-size: 0.7rem;
                border-radius: 2px;
                text-transform: uppercase;
                padding: 0.3rem 0.6rem;
                margin-left: 0.4rem;

                &.hot {
                    background-color: $col-important;
                }

                &.hot::after {
                    content: "hot";
                }

                &.special {
                    background-color: $col-gold;
                }

                &.special::after {
                    content: "special";
                }

                &.new {
                    background-color: $col-course-new;
                }

                &.new::after {
                    content: "new";
                }
            }
        }
    }

    .course-info {
        border-right: 1px solid $col-light-gray;
        border-bottom: 1px solid $col-light-gray;
        border-left: 1px solid $col-light-gray;

        &.course-featured {
            border-right: 1px solid $col-featured;
            border-bottom: 1px solid $col-featured;
            border-left: 1px solid $col-featured;
        }

        .course-category {
            font-size: 0.7rem;
            color: $col-gray;
        }

        .course-name {
            font-size: 0.9rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid $col-light-gray;
        }

        .course-card-bottom {
            .five-star {
                i {
                    color: $col-gold;
                }
            }

            .course-duration {
                font-size: 0.8rem;
            }

            .course-cost {
                font-weight: 500;
            }
        }
    }
}
</style>