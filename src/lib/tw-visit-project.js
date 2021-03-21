import {setProjectId} from '../reducers/project-state';

const visitProject = (dispatch, projectId) => {
    if (process.env.ROUTING_STYLE === 'wildcard') {
        location.href = `${process.env.ROOT}${projectId}`;
        return;
    }
    dispatch(setProjectId(projectId));
};

export default visitProject;
